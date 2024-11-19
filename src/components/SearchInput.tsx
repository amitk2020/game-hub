import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef(null);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (ref.current) {
            console.log('Form submitted');
            console.log('Search input value:', ref.current.value);
            onSearch(ref.current.value);
        } else {
            console.log('Search input not found');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <InputGroup >
                <InputLeftElement children={<BsSearch />}></InputLeftElement>
                <Input ref={ref} borderRadius={20} placeholder='Search Games...' variant='filled' />
            </InputGroup>
        </form>
    )
}

export default SearchInput