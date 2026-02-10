import {createRoot} from 'react-dom/client';
const root = createRoot(document.getElementById('root'));

root.render(
    temporaryname
)

function temporaryname() {
    return (  <main>
    <img src="react-logo.png" width="200" alt="React Logo"/>
    <h1>Hello, world! This is some Facts about me</h1>
    <ul>
      <li>I am a 4th year BSIT student at Cavite State University - Imus Campus.</li>
      <li>I love learning new technologies.</li>
      <li>In my free time, I enjoy playing video games, scrolling through social media, 
        watching movies, listening to music, reading a book, and working out.</li>
    </ul>
  </main>
    )
}