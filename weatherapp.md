# Weatherapp
 
## Get started
- Create react app: https://reactjs.org/docs/add-react-to-a-new-app.html
- Other starter kits: https://reactjs.org/community/starter-kits.html
- Advanced manual setup: https://reactjs.org/docs/add-react-to-an-existing-app.html#installing-react
 
 
## Requirements
 
- [ ] Temperature and other weather conditions for current position
- [ ] Wind strength
- [ ] Humidity
- [ ] Sunrise & Sunset (time)
- [ ] Unit of measurement selection
 
- [ ] Weather prognosis for a specific interval (10 days?)
- [ ] Weekly overview
- [ ] Every hour for current day
- [ ] 10 day prognosis
 
- [ ] Implement API
- [ ] Implement positioning with geolocation
 
### Extra credit
- [ ] Search for weather by position (City, area)
- [ ] Save locations in list
- [ ] Produce graphs with:
 
   - High/low temps
   - Average temps
   - Average rain etc.
- [ ] Map with weather fronts. Api Here: https://opendata.smhi.se/apidocs/radar/
 
## API
 
- OpenWeatherMap http://www.openweathermap.org/appid
- YR.no
- SMHI
 
## Structure & Scaffolding
 
### Scaffolding
- components -> Name -> Name.js
- components -> Footer -> Footer.js
- components -> index.js (for import bundling)
 
Index.js
```javascript
export { Footer } from './Footer/Footer';
export { Header } from './Header/Header';
export { Content } from './Content/Content';
 
```
 
 
### Structure
 
#### Exports
```javascript
export default Classname;
```
 
#### Imports
```javascript
import { Footer, Header, Content } from './components'; //This reads from index.js in ./components
```
 
 
 
## Other notes
- **IMPORTANT: Must close all tags in JSX. Even self-closing tags like img and input**
- Look into using the ReactServiceWorker for offline capabilities https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-3-offline-support-and-network-resilience-c84db889162c
- Look into ejecting to be able to write sass with create-react-app (optional, requires ejecting) https://medium.com/@Connorelsea/using-sass-with-create-react-app-7125d6913760
- Look into yeomen.io to generate react components (optional, requires ejecting)
 
## Code examples
#### Render children
```javascript
To render children, In component:
{this.props.children} // This will render whatever tags or components we insert inside the Component-tag below:
 
In component instance:
<Component>
  <h1>This should still work!</h1>
  <Othercomponent /> // This too!
</Component>
```
 
#### Fetch & state change
```javascript
 
//fetch example with this.setState
 
fetch('url')
  .then(res => res.json())
  .then(res => {
    this.setState({
      weather: res.weather
    }), function () {
      console.log(res.weather)
    })
});
```
 
 
#### Check state and run conditional
```javascript
 
//Check state example. This inside render method on component
 
{this.props.weather.length > 0
  ? // Render some JSX
  : // Render some other JSX
}
```