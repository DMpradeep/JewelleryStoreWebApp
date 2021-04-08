# Links
WebApp is deployed as "Azure App Service"  
**Swagger Url** - https://jewellerystoreweb.azurewebsites.net/  
User credentials:  
1. Username - **User**  Password - **123**  (Normal user)  
2. Username - **ProUser** Password - **456** (Privileged user)  

# Introduction 
Jeweellery store WebApp.  
Part of technical assigment - https://github.com/AUNewGen/jewelry-store-challenge-  

WebApp on Asp.Net core.  
.Net version - 5.0  

# Getting Started
1. Download solution  
2. Run npm install on ClienApp folder   
![image](https://user-images.githubusercontent.com/25026068/113978106-25e5d100-9861-11eb-9a31-42e143bce192.png)  
3. Dotnet run  
![image](https://user-images.githubusercontent.com/25026068/113978186-4150dc00-9861-11eb-8685-44ce51c067a8.png)


Default site url - http://localhost:5010 . Configurable in LaunchSettings.json file  

# Build and Test
Build: Make user to have .net 5 sdk installed.    
Language - **Typescript**  
Js Framework - **React**  
State Management - **Redux**  
Middleware - **Redux-Saga**  
UI components - **Material UI**  

# Deployement
1. CI : Configured corresponding Azure Devops pipeline.   
Link - https://dmpradeep.visualstudio.com/JewelleryStore/_build?definitionId=3   
2. CD : Configured corresponding Azure Devops release to deploy the api to "Azure App Service".   
Link - https://dmpradeep.visualstudio.com/JewelleryStore/_release?_a=releases&view=mine&definitionId=2    

# @Todo  
1. UI tests (I have no prior experience. Planning to use ReactTestingLibrary. Will learn and complete it by April 10th 2021)
