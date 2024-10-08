import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlateforms'
import { Platform } from '../hooks/useGames';

interface Props {
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
    const { data, error } = usePlatform();
    if (error) {
        return null;
    }
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || "Platforms"}</MenuButton>
            <MenuList>
                {data.map((platform) => {
                    return <MenuItem onClick={() => onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
                })}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector