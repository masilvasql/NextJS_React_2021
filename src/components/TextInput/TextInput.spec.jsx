import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import {TextInput} from '.'

describe('<TextInput/>', ()=>{
    it('should call handleChangeFunction on each key pressed',()=>{

        const fn = jest.fn();

        const{debug} = render(<TextInput handleChange={fn} searchValue={'Search'}/>);
        debug();
        const input = screen.getByPlaceholderText(/type your search/i);
        expect(input).toBeInTheDocument()
        expect(input.value).toBe('Search')

    })
    it('should have a value of search value',()=>{

        const fn = jest.fn();

        render(<TextInput handleChange={fn}/>);

        const input = screen.getByPlaceholderText(/type your search/i);

        const value = 'O Valor';
        userEvent.type(input, value);
        
        expect(input.value).toBe(value);
        expect(fn).toHaveBeenCalledTimes(value.length);

    })
    it('should match snapshot',()=>{
        const fn = jest.fn();

        const {container } = render(<TextInput handleChange={fn}/>);
        
        expect(container.firstChild).toMatchSnapshot();
        

    })


})