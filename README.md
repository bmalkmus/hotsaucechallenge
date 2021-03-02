# Hot Sauce Challenge

## Summary
 Given a set of Data and two image files, the object was to create a two page application that renders a grid view of the data with the second page giving the individual item details. After the intitial application was built to the twoo diagrams, the instructions were to improve on the design of the application. 
## Deliverables
- Project created with Create-React-App and Framer-Motion library for page transitions 
- Landing Page displays all the sauces in individual cards. Clicking on "X" icon in top right deletes the Hot Sauce from the view
- When Card is clicked, details page renders with Title, Description, and Picture. Link availble to return back to home page. 
- Store is managed by redux for better organization of code and functions. Makes project easier for expansion.
  - Persistant redux so user can log off and pick up right where user started
- URL routes properly, with fallbacks and sauces not in data-set routing to ```/addSauce```
- Third Page created to add a sauce to the list
  - Error Handling for only proper image url. 
- SVG animated loading screen to provide lazy load of components
## Instructions
run 
```npm run app```
in the root directory of the application or <br>```npm install``` and then ```npm run start```
## Future Development
- Add a splash screen as first view. Login Screen possible. 
- Use design framework to set theme of colors/spacing/font and use throughout the project. CSS styling is variable based and more reusable
- Different font for project. Title possibly a font with a liquid effect at the end of the lettering. 
- 
## Comments for Improvement of Exercise
 Not sure if this was intentional, Sriracha and Texas Pete URLs are no longer active. Possibly pictures with all matching backgrounds or Transparent.
## Visuals
### Grid View
![image](https://user-images.githubusercontent.com/57015175/109578405-f696b400-7aab-11eb-9654-505d19ad926b.png)
### Details View
![image](https://user-images.githubusercontent.com/57015175/109578447-09a98400-7aac-11eb-8d6f-6a006cd04b44.png)
### Deleted Sauce
![image](https://user-images.githubusercontent.com/57015175/109578484-17f7a000-7aac-11eb-85bc-09d8ff132982.png)
### Empty Fields Error Handling
![image](https://user-images.githubusercontent.com/57015175/109578632-60af5900-7aac-11eb-8b9c-54b952acb678.png)
### Invalid image URL Error Handling
![image](https://user-images.githubusercontent.com/57015175/109579134-3316df80-7aad-11eb-9c2b-dadc8d1e7c68.png)
### Added Sauce
![image](https://user-images.githubusercontent.com/57015175/109578737-95231500-7aac-11eb-9ecf-9c118ec9684d.png)


