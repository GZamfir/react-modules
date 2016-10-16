import React from 'react';
import Picture from './Picture.js';
import '../styles/PictureList.css';
import $ from 'jquery';

class PictureList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pictures: [],
      favorites: []
    }
  }

  componentDidMount(){
    var self = this;

    var url = 'https://api.instagram.com/v1/tags/coffee/media/recent?access_token=' + this.props.apiKey + '&callback=?';

    $.getJSON(url, function(result){
      if(!result || !result.data || !result.data.legth){
        return;
      }

      var pictures = result.data.map(function(p){
        return {
          id: p.id,
          url: p.link,
          src: p.images.low_resolution.url,
          title: p.caption ? p.caption.text : '',
          favorite: false
        };
      });

      self.setState({ pictures: pictures });
    })
  }

  pictureClick(id){
    var favorites = this.state.favorites;
    var pictures = this.state.pictures;

    for(var i = 0; i < pictures.length; i++){
      if(pictures[i].id == id){
        if(pictures[i].favorite){
          return this.favoriteClick(id);
        }

        favorites.push(pictures[i]);
        pictures[i].favorite = true;

        break;
      }
    }

    this.setState({pictures: pictures, favorites: favorites});
  }

  favoriteClick(id){
    var favorites = this.state.favorites;
    var pictures = this.state.pictures;

    for(var i=0; i < favorites.length; i++){
      if(favorites[i].id == id) break;
    }

    //remove picture from favorites
    favorites.splie(i, 1);

    for(i=0; i < pictures.length; i++){
      if(pictures[i].id == id){
        pictures[i].favorite = false;
        break;
      }
    }

    this.setState({pictures: pictures, favorites: favorites});
  }

  render(){
    var self = this;
    var pictures = this.state.pictures.map(function(p){
      return <Picture id={p.id} src={p.src} title={p.title} favorite={p.favorite} onClick={self.pictureClick} />
    });

    if(!pictures.length){
        pictures = <p>Loading images..</p>;
    }

    var favorites = this.state.favorites.map(function(p){
        return <Picture id={p.id} src={p.src} title={p.title} favorite={true} onClick={self.favoriteClick} />
    });

    if(!favorites.length){
      favorites = <p>Click an image to makr it as a favorite.</p>
    }

    return (
      <div>
        <h1>Popular Instagram Pics</h1>
        <div className="pictures">{pictures}</div>
        <h1>Your Favorites</h1>
        <div className="favorites">{favorites}</div>
      </div>
    )
  }
}

export default PictureList;
