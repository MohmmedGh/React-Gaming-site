// import './SildeCard.css'
// import 'react-slideshow-image/dist/styles.css'
// import { Slide } from 'react-slideshow-image';
// // import Title from './../../component/Title/Title';
// // import ContainerWraper from './../ContainerWraper/ContainerWraper';

// const spanStyle = {
//     padding: '20px',
//     background: '#efefef',
//     color: '#000000'
// }

// const divStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundSize: 'cover',
//     height: '400px'
// }
// const slideImages = [
//     {
//         url: '../../asset/images/featured-01.jpg',
//         caption: 'Slide 1'
//     },
//     {
//         url: '../../asset/images/featured-02.jpg',
//         caption: 'Slide 2'
//     },
//     {
//         url: '../../asset/images/featured-03.jpg',
//         caption: 'Slide 3'
//     },
// ];


// const SildeCard = (p) => {
//     return (

//         <div className="slide-container">
//             <Slide>
//                 {slideImages.map((slideImage, index) => (
//                     <div key={index}>
//                         <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
//                             <span style={spanStyle}>{slideImage.caption}</span>
//                         </div>
//                     </div>
//                 ))}
//             </Slide>
//         </div>
//     )

// }

// export default SildeCard