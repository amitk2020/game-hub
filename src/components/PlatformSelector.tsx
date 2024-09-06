import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlateforms'

const PlatformSelector = () => {
    const { data, error } = usePlatform();
    if (error) {
        return null;
    }
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platforms</MenuButton>
            <MenuList>
                {data.map((platform) => {
                    return <MenuItem key={platform.id}>{platform.name}</MenuItem>
                })}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector