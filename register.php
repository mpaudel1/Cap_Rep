<!DOCTYPE html>
    <head>
        <title>register form</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="register_login_style.css">
    </head>
    <body>
        <div class="form-container">
            <form action="" method="post">
                <h3> register now</h3>
                <input type="text" name="name" required placeholder="enter your name"

                <input type="email" name="email" required placeholder="enter your name">
                <input type="password" name="password" required placeholder="enter your password">
                <input type="password" name="cpassword" required placeholder="confirm your password">
                 
                <input type="submit" value="register now" class="form-btn">
                <p>already have an account?<a href="login.php">login now</a></p>
            </form>
        </div>
    </body>
</html>