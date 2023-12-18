# Snapchat Web Spammer

## About
Snapchat spammer using Snapchat's web chat and playwright. This project uses web technologies and can be used easily with npm.

## Usage
1. Start by cloning the repo with git.
```git clone https://github.com/pwnengine/SnapSpammer.git```

2. change your working directory to the created project directory.
```cd SnapSpammer```

3. Install the needed node modules.
```npm i```

4. Install playwright.
```npx playwright install```

5. Create an .env file to config for your needs. The file should contain three key details.
   First, the snapchat account's email and password. Second, the spam interval in milliseconds. Finally, the message you want spammed.
   Here's an example of what your .env should contain:
   ```
   SC_EMAIL=<your username or email>
   SC_PASS=<your password>
   SC_INTERVAL=<any time in milliseconds 60000 is every minute>
   SC_MSG=<the message your want to be spammed>
   ```

6. run the build or run command. Optionally you may change the command in ```package.json```.
```npm run dev```

## Information
1. Consider a reasonable interval to prevent your spamming accounts from getting banned fast.
2. This software never stores email or passwords remotely.
3. If you want the program to run in the background edit line number 10 in ```app.ts``` from ```headless: false,``` to ```headless: true,```.
