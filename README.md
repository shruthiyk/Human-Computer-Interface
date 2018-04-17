## Project: CCIS GRADUATE ACADEMIC ADVISOR  ##
**Steps to configure CGAA on local machine**
1. Clone this git repository using the steps mentioned on the link below: https://help.github.com/articles/cloning-a-repository/.
2. **Installing Node.js:**
Download and install Node.js on the local development machine. Test that Node.js installed by typing the command node at the command line. A command prompt should appear waiting for additional commands. Type Ctrl+c twice to exit Node.js command line interpreter.
3. **Installing MongoDB:**
    a. Download MongoDB and install on the local development machine as described in the MongoDB documentation.  
    b. At the root of the file system, create a directory called data and in there create a directory called db, e.g., /data/db. This directory is where MongoDB will store all files related to the databases managed by MongoDB.  
   c. Add the MongoDB binaries to the system PATH environment variable so that the database can be executed from anywhere in the terminal command line.   
For Windows machine: Assuming that MongoDB version 3.6 was installed in your C:\Program Files, add C:\Program Files\MongoDB\Server\3.6\bin\ to your system variable.  
4. Test that MongoDB starts by typing mongod at the command line. The command line will print several lines.  
5. Include the following user variables on your machine:  
| Variable Name  | Variable Value |
| ------------- | ------------- |
| SESSION_SECRET  | secretKey  |
| FACEBOOK_ASSGN_CALLBACK_URL  | http://10.0.0.92:3000/auth/facebook/callback  |
| FACEBOOK_ASSGN_CLIENT_ID  | 123  |
| FACEBOOK_ASSGN_CLIENT_SECRET  | 123  |
| FACEBOOK_CALLBACK_URL  | 123  |
| FACEBOOK_CLIENT_ID  | 123  |
| FACEBOOK_CLIENT_SECRET  | 123  |
