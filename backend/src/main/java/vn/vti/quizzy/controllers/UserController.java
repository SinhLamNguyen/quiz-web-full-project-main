package vn.vti.quizzy.controllers;

import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.vti.quizzy.dto.ResponseObject;
import vn.vti.quizzy.jwt.JWTUtility;
import vn.vti.quizzy.jwt.JwtInterceptor;
import vn.vti.quizzy.jwt.JwtTokenStore;
import vn.vti.quizzy.models.User;
//import vn.vti.moneypig.otp.OTPService;
import vn.vti.quizzy.security.PasswordEncoder;
import vn.vti.quizzy.services.UserService;
@CrossOrigin(origins = "localhost:3000")
@RestController
@RequestMapping("/api/user")
public class UserController {
    private  final UserService userService;
    private final JwtInterceptor jwtInterceptor;
    private final JwtTokenStore jwtTokenStore;
//    private final FirebaseService firebaseService;
    @Autowired
    public UserController(UserService userService, JwtInterceptor jwtInterceptor,
                          JwtTokenStore jwtTokenStore) {
        this.userService = userService;
        this.jwtInterceptor = jwtInterceptor;
        this.jwtTokenStore = jwtTokenStore;
//        this.otpService = otpService;
    }
    @GetMapping("/findByToken")
    public ResponseEntity<?> findByToken(HttpServletRequest request) {
        String token = JwtInterceptor.getInstance().extractTokenFromRequest(request);
        if (token != null) {
            Claims claims =  JWTUtility.getInstance().parseToken(token);
            String username = claims.getSubject();
            if (username != null) {
                User user = userService.findByUsername(username);
                if (user != null) {
                    return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, user,"user exist"));
                }
            }
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
    }
    @GetMapping("/findToken")
    public ResponseEntity<?> findByTk(@RequestParam String token) {
       // String token = JwtInterceptor.getInstance().extractTokenFromRequest(request);
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;
        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            Claims claims = JWTUtility.getInstance().parseToken(token);
            String username = claims.getSubject();
            if (username != null) {
                User user = userService.findByUsername(username);
                if (user != null) {
                    return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, user,"user exist"));
                }else {
                    return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"cannot created"));
                }
            }
        }


        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
    }

    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestParam String token, @RequestBody User user)
    {
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            String rawPassword = user.getPassword();
            user.setPassword(PasswordEncoder.getInstance().encodePassword(rawPassword));
            User response =  userService.createUser(user);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"user not exist"));
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }

    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestParam String token, @RequestBody User user)
    {
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            User response =  userService.updateUser(user);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"user updated"));
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }

    }

    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestParam String token, @RequestParam Long id)
    {
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            User foundUser = userService.findById(id);
            foundUser.setStatus(0);
            User response =  userService.updateUser(foundUser);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, response,"user deleted"));
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }

    }


    @PostMapping("/findAll")
    public ResponseEntity<?> findAll(@RequestParam String token){

        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, userService.getAllUsers(),"success"));
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
    }

    @PostMapping("findAllActive")
    public ResponseEntity<?> findAllActive(@RequestParam String token) {
        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, userService.findAllActive(), "success"));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null, "fail"));
    }

    @GetMapping("/findById")
    public ResponseEntity<?> findById(@RequestParam String token,@RequestParam Long id){

        if(token.isBlank()){
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }
        token = "Bearer " + token;

        boolean isAuthenticated = JwtInterceptor.getInstance().isValidToken(token);
        if(isAuthenticated)
        {
            if(userService.findById(id) == null)
            {
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
            }else
            {
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, userService.findById(id),"success"));
            }
        }else
        {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(201, null,"user not exist"));
        }

    }
    @GetMapping("/new-access-token")
    public ResponseEntity<?> newAccessToken(@RequestParam String token){
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject(200, userService.findAll(),"success"));
    }
    @GetMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String authorizationHeader) {
        String token = authorizationHeader.replace("Bear]]]]er ", "");
        String username = jwtInterceptor.extractUsername(token);
        if (jwtTokenStore.isTokenPresent(username, token)) {
            jwtTokenStore.removeToken(username);
            return ResponseEntity.status(HttpStatus.OK).body("Logout successfully");
        } else {
            return ResponseEntity.badRequest().body("Invalid token");
        }
    }

//    @PostMapping("/verify-otp")
//    public ResponseEntity<String> verifyOTP(@RequestParam("idToken") String idToken) {
//        try {
//            FirebaseToken firebaseToken = firebaseService.verifyOTP(idToken);
//            // Perform additional actions with the verified user's information if needed
//            return ResponseEntity.ok("OTP verification successful");
//        } catch (FirebaseAuthException e) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid OTP");
//        }
//    }

//    @PostMapping("/send-otp")
//    public ResponseEntity<String> sendOTP(@RequestParam("phoneNumber") String phoneNumber) {
//        otpService.sendOTP(phoneNumber);
//        return ResponseEntity.ok("OTP sent successfully");
//    }
}
