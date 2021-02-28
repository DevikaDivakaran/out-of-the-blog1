import React from 'react';
import NewsItem from '../news-item/news-item.component';
import './directory.styles.scss'

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
            {
                title : 'Hurricane Hanna makes landfall around 5 p.m. on Saturday.',
                //imageUrl: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYzNjIxNDQ0ODE3NzkwOTEz/ufo-sightings-promo-1125685802.jpg',
                id: 1,
            },
            {
                title : 'Nicki Minajs Husband Gets Permission To Be There For Babys Birth',
               // imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/10/24/10/hogwarts-hall.jpg?width=990&auto=webp&quality=75',
                id: 2,
            },
            {
                title : 'New Lions safety Jayron Kearse suspended three games',
                //imageUrl: 'https://cdn.filestackcontent.com/Mkspao8zQ2uUKcXIWRr2/convert?cache=true&crop=0%2C329%2C1999%2C999&crop_first=true&quality=90&w=1920',
                id: 3,
            } 
           
        ]
        }
    }
    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, id}) => (
                        <NewsItem key= {id} title={title}/>
                    ))
                }
            </div>
        )
    }
}
export default Directory;