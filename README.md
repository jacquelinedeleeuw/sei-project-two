# General Assembly Project Two - Virtual Rijksmuseum

### Timeframe
48 hours

## Project Overview
This was my second project for the Software Engineering Immersive Course at General Assembly. I was working together with Sotirios and without much notice we were given 48 hours to create a React based web app. We decided to create a Virtual Rijksmuseum due to our shared interest in this museum. We used the Rijksmuseum API which gave us access to their full collection of artwork. This was our first opportunity using React.js with `useState()` and `useEffect` hooks.  The final app included a ‘build-your-own’ display feature, bilingual (Dutch or English) descriptions for each object, and a text-to-speech audio play option.

### Deployed version
https://virtual-rijksmuseum.netlify.app/

![](src/assets/rijksmuseum.gif)


### Project Brief
48 hour ‘React-a-thon’ building a front-end app making use of a public API.

### Technologies used:
- React
- HTML5
- CSS3
- JavaScript (ES6)
- Insomnia
- Bulma
- Git
- GitHub
- Google Chrome Dev Tools
- VS Code
- Eslint

### Process
Due to the short time we were given we tried to be efficient with our planning and wireframing. We planned our project using my whiteboard and designed the pages we wanted to build on there. 

We decided to work together on the entire project using live share as we only just learned to use React.js and thought we could be more efficient by pair coding the entire project.

While I set up the React app on VS Code, Sotirios researched and tested the API endpoints on Insomnia. 
We started setting up the basics for all the pages we wanted to create and worked on the homepage and navbar first. This was fairly straightforward with only a couple of links on the homepage. We used the Bulma framework which made the navbar look really good very quickly.

Next we worked on the page showing the different collections. We wanted to create different collections based on the various rooms you can visit in the museum. We used the Rijksmuseum API and `Math.random()` to be able to have a different background image each time the page is loaded.

```
useEffect(() => {
   const getData = async() => {
     const { data } = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/?key=${key}&toppieces=true`)
     setBackgroundImage(data.artObjects[Math.floor(Math.random() * data.artObjects.length)].webImage.url)
   }
   getData()
 }, [])
```

When the user clicks on any of the collections they are redirected to a new page showing all artwork from that room. We used `useParams()` with the name of the collections in our API request for this page.

```
 let { collectionId } = useParams()
 collectionId = collectionId.split(' ').join('%20')
 
 const [collection, setCollection] = useState(null) 
 
 useEffect(() => {
   const getData = async() => {
     const { data } = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/?key=${accessKey}&imgonly=True&ps=20&s=chronologic&f.hnrCode.section.sort=${collectionId}`)
     setCollection(data.artObjects)
   }
   getData()
 })
```

The user path continues when a user clicks on an image and they will be redirected to a new page with the full size picture and more detail about the image. When the user clicks on the ‘i’ on the left, a popup with detailed information about the artwork appears. We also included a toggle in the navbar where users could choose the language. We were able to include this feature as the API had endpoints for both Dutch and English content.
![](src/assets/language.gif)

One feature we really wanted to implement was text to speech. When the user is viewing the information of a piece of art they can click the audio button and the text would be read by using `speechSynthesis`. It was a big win when we figured out how to do this but one of the issues was that we had to figure out how to stop it. We created a toggle onClick that would `.cancel` or `.speak` based on if the audio was playing.
```
 const handleAudioPlay = event => {
   const audioMessage = new SpeechSynthesisUtterance(event.target.value)
   window.speechSynthesis.speaking ? window.speechSynthesis.cancel() : window.speechSynthesis.speak(audioMessage)
 }
```

To allow users to choose what they wanted to see we implemented a feature called ‘Create your own collection’. We created a form and with the use of different data from the API we could create dropdowns for the type, place, material and technique. The API also returned hex colours that were included in each art piece which we used to create a grid of different colours to choose from in the form. 

The chosen data from the form was then stored in the `params` and included in the API request for the artwork overview page.

![](src/assets/create.gif)

### Know errors or bugs
- If too many parameters are chosen on the create your own the page doesn’t show any artwork

### Future improvements
- Due to the limited time we had for this project we were not able to make it fully responsive. Some pages work nicely but features such as the information popup and ‘back to search results’ do not work on mobile devices.

### Key learnings
Despite only having recently learned React I think the project was a success given we only had 48 hours to complete this. 

It was a great opportunity to work in a pair and learn from each other. We also used a CSS framework for the first time with Bulma which made us realise we could accomplish a good but simple design with just a few classes. 

The API was a bit challenging to use at first but once we tested out all different endpoints we were able to successfully use the data we needed for our app.

Overall it was a great experience of pair coding and using skills we learned on the course. 
