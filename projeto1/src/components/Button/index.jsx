import { Component } from 'react'
import './style.css'

export default class Button extends Component {

  render() {
      const {text, loadMorePosts, disabled} = this.props;
    return (
      <button 
        className='button' 
        onClick={loadMorePosts}
        disabled={disabled}
      >
        {text}
      </button>
    )
  }
}