# Simple email sending app

### Description
Simple email sender is an email sending app. The user can send the email to the recipient email address by creating an account in this app.

### Packages 
   * Express 
   * Mongodb
   * Cors
   * nodemon
   * Nodemailer
   * Bcrypt
   * JSON Web Tokens
   
### Api's

#### Signup

```
http://<domianname>/auth/signup
```

This api is used to create the account in this app.

##### Parametes that need to be passed in this api
Pass the below parameters in the body
* name
* email
* password


#### Login

```
http://<domianname>/auth/login
```

This api is used to login to the account in this app.

##### Parametes that need to be passed in this api
Pass the below parameters in the body
* email
* password

#### Reset password

```
http://<domianname>/auth/resetpassword
```

This api is used to reset the account password .
A mail will be sent to the given registered account with the new password to login

##### Parametes that need to be passed in this api

Pass the below parameters in the body
* email

#### Send email

```
http://<domianname>/email/send
```

This api is used to send the mail to the given recipient .

##### Parametes that need to be passed in this api
Pass the below parameters in the headers

  * token

Pass the below parameters in the body 

  * email
  * toaddress
  * subject
  * text

