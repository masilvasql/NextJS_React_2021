import {Posts   } from '.'
const { render, screen } = require("@testing-library/react")

const props = {
    posts:[
      {
        id:1,
        title:'title',
        body:'body',
        cover:'cover'
      },
      {
        id:2,
        title:'title 2',
        body:'body 2',
        cover:'cover 2'
      },
      {
        id:3,
        title:'title 3',
        body:'body 3',
        cover:'cover 3'
      },
    ]
  }

describe('<Posts/>', ()=>{
    it('should render posts', ()=>{
        render(<Posts {...props}/>);

        expect(screen.getAllByRole('heading', {name:/title/i}))
        .toHaveLength(3);

        expect(screen.getAllByRole('img', {name:/title/i}))
        .toHaveLength(3);

        expect(screen.getAllByText(/body/i))
        .toHaveLength(3);

        expect(screen.getByRole('img', {name:/title 3/i}))
        .toHaveAttribute('src', 'cover 3');
    })
    
    it('should match snapshot', ()=>{
        const {container } = render(<Posts {...props}/>);

        expect(container.firstChild).toMatchSnapshot();
    })

        
})