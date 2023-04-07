#Kartikeya Walia's Personal Portfolio website


Steps to recreate:

1. fork the repository <username.github.io>
2. clone to a local copy 
3. make sure you have node installed
4. cd <repo-folder> and do 'git remote rm origin' to break link from the remote (at this point you can delete the username.github.io repository from github as we will work with the local file now)
5. delete node_modules and package-lock.json (this is important as the dependencies can change over time and upgraded versions will be available)
6. 'npm install' to create new node_modules and package-lock.json
7. now do 'npm run dev' and open localhost:1234 on your browser to see the webpage
8. make necessary changes in the src folder and you can see the changes on localhost
9a. do 'npm run prod' (make sure you are doing this on windows)
9b. if you are linux user change the 'prod' script in the package.json as in the note below

Windows Note: "prod": "npm run build && xcopy /E /Y dist docs && rd /S /Q dist"
This command will build your website using npm run build, then copy the contents of the dist folder to the docs folder using xcopy, and finally delete the dist folder using rd.
In Windows, the command to copy files from one directory to another is xcopy rather than copy. Additionally, to delete a directory, you need to use the rd command instead of del. Finally, if you want to copy the contents of the dist folder rather than the folder itself, you will need to use the /E switch with xcopy.

Linux Note: "prod": "npm run build && copy -R dist/* docs/ && del dist"

10. now do git init
11. create a new repo <username.github.io>
12. then do 'git remote add origin https://github.com/your-username/new-repo.git'
13. do 'git add .' and 'git commit -m "Commit message describing your changes"'
14. do 'git push -u origin master ' this will create a master branch and put all the files. Please note that in gitignore /node_modules, /.cache and /dist have been ignored as these are not required.
15. go to github, and make sure the repo looks same as the local folder
16. Enable GitHub Pages for your repository by going to the Settings tab, scrolling down to the "GitHub Pages" section, and selecting the master branch as the source for your GitHub Pages site. Save the changes. make sure to select /docs as the folder instead of /root
17. Wait a few minutes (usually 5 minutes) for GitHub to publish your site. You should be able to access your site at https://username.github.io.