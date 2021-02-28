import React from 'react';
import './article.styles.scss';
import ARTICLE_DATA from './article.data.js'
import ArticleItem from '../../components/article-item/article-item.component'


class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections : [ARTICLE_DATA]
        }
    }

    render() {
        const {collections} = this.state;
        return (<div className='article-page'>
        {
            collections.map(({title, id, description, imageUrl}) => (
                <ArticleItem key= {id} title={title} description={description}/>
            ))
        }
    </div>
        )
    }
}
export default ArticlePage;