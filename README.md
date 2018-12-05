# ic-elp

***************************************************************
	
	Welcome Folks,
	IC  ELP
	
***************************************************************


Please execute following scripts to be able to run IC_ELP:

0/  Make sure your npm is updated to a latest version by executing /cmd/npm_upgrade.bat
1/	From cmd folder, run npm_install.bat file in order to installing npm packages locally
2/	From cmd folder, run run_client.bat file in order to run client
3/	From cmd folder, run build_client.bat file in order to build client

How to move .gitconfig out of H:\ drive?
0/ 	Run cmd as Administraor
1/ 	Go to local repository folder in cmd:

Type: C:\Angular>set HOME
HOME=H:\
HOMEDRIVE=H:
HOMEPATH=SOME_OTHER_PATH\

2/ Change PATH variable:
C:\Angular>set HOME=C:
Type: C:\Angular>set HOME [enter]
Type: C:\Angular>set HOMEDRIVE=C: [enter]

How to update angular 6 to 7.0.2
0/ Run cmd as Administraor
1/ Go to local repository folder in cmd

2/ Execute below commands to uninstall current version of angular:
npm uninstall -g angular-cli
npm uninstall --save-dev angular-cli

3/ Remove node_modules folder

4/ Execut below commands to install new version of angular (7.0.2)
npm cache verify
npm install -g @angular/cli@7.0.2
use rmdir /S/Q node_modules dist
npm install --save-dev @angular/cli@7.0.2
npm install

How to enable debugging in VS Code for Chrome:
0/ Install extension "Debugger for Chrome"
1/ Set up configuration file "launch.json"
2/ Enable debugging panel from left menu - shortcut: Ctrl+Shift+D
3/ Execute serve application command: ng s
4/ Start debugging (recompiling is enabled so it is possible to make changes in code in real time)
