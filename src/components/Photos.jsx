import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Paws from '../Images/4paws.jpg';
export default function Photos() {
  return (
    <ImageList sx={{ width: '70vw', height: '70vh' }}
        variant="woven"
        cols={3}
        gap={25}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img 
            className="community-photos"
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1554830072-52d78d0d4c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&&h=150q=80',
    title: 'I got Adopted',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1523810192022-5a0fb9aa7ff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80',
    title: 'Planting',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://i.cbc.ca/1.5116918.1556644948!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/1041987488.jpg',
    title: 'Rescue',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1557660559-42497f78035b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2146&q=80',
    title: 'Race for Ukraine',
    author: '@nolanissac',
  },
  {
    img: Paws,
    title: 'Adoption Campaign',
    author: '@Sandy123',
  },
  {
    img: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Beach cleaning',
    author: '@hjrc33',
  },

  {
    img: 'https://images.unsplash.com/photo-1598129982257-bede1760b4a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Graham Park restoration',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1617920787470-321c0f68204a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    title: 'Wall of hearts',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1541532108062-73f2181a08c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Adopted bobby',
    author: '@silverdalex',
  },
  {
    img: 'https://kdrecruitment.co.uk/wp-content/uploads/2020/05/MVIMG_20191130_112717-1080x675.jpg',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1584062134595-dacde0a2336d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
    title: 'Reforesting with my son',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1617835963886-d504ab3cca44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Helping turtles',
    author: '@southside_customs',
  },
  {
    img: 'https://images.unsplash.com/photo-1615856210162-9ae33390b1a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    title: 'Building refuges',
    author: '@unitedtacos',
  },
  {
    img: '  https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Be the change',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1632782734631-e19fc5f732a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Spanish lessons',
    author: '@southside_customs',
  },
  {
    img: 'https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Love your neighbour',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1547082688-9077fe60b8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80',
    title: 'Health Campaign',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1607227063002-677dc5fdf96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    title: 'Delivering masks',
    author: '@shelleypauls',
  },
  

];
