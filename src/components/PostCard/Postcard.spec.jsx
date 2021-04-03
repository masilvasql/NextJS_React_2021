
import {PostCard} from '.'
import { PostCardPropsMock } from './mock'
const { render, screen } = require("@testing-library/react")

const props = PostCardPropsMock;

describe('<PostCard/>', ()=>{
    it('should render PostCard correctly', ()=>{
        // const {debug} =render(<PostCard {...props} />)
        // debug();

        render(<PostCard {...props} />)

        expect(screen.getByRole('img', {name:'Título'}))
        .toHaveAttribute('src', 'Imagem/img.png');

        expect(screen.getByRole('heading', {name:'Título'})).toBeInTheDocument()
        expect(screen.getByText('Body')).toBeInTheDocument()
    })

    it('should match snapshot', ()=>{
        const  {container } = render(<PostCard {...props} />)
        expect(container.firstChild).toMatchSnapshot();
    })
})