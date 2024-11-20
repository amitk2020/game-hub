import { HStack, List, Image, ListItem, Button, Heading } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getImageCroppedUrl from "../services/images-crop";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
    const { data } = useGenre();

    return (
        <>
            <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
            <List>
                {data.map((genre) => {
                    return (
                        <ListItem key={genre.id} paddingY="5px">
                            <HStack spacing={2} >
                                <Image boxSize="32px" borderRadius={8} objectFit={'cover'} src={getImageCroppedUrl(genre.image_background)} alt={genre.name} />
                                <Button whiteSpace={'normal'} textAlign="left" fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} onClick={() => onSelectedGenre(genre)} fontSize="lg" variant="link">  {genre.name}</Button>
                            </HStack>
                        </ListItem>
                    )
                }
                )}
            </List>
        </>
    )
}

export default GenreList