import { HStack, List, Image, Text, ListItem, Button } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getImageCroppedUrl from "../services/images-crop";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectedGenre }: Props) => {
    const { data } = useGenre();

    return (
        <List>
            {data.map((genre) => {
                return (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack spacing={2} >
                            <Image boxSize="32px" borderRadius={8} src={getImageCroppedUrl(genre.image_background)} alt={genre.name} />
                            <Button onClick={() => onSelectedGenre(genre)} fontSize="lg" variant="link">  {genre.name}</Button>
                        </HStack>
                    </ListItem>
                )
            }
            )}
        </List>
    )
}

export default GenreList