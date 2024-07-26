import { HStack, List ,Image,Text, ListItem} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getImageCroppedUrl from "../services/images-crop";

const GenreList = () => {
    const {data} = useGenre();
  return (
    <List>
        {data.map((genre)=>
        {
            return (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack spacing={2} >
                        <Image boxSize="32px" borderRadius={8} src={getImageCroppedUrl(genre.image_background)} alt={genre.name} />
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            )
        }
        )}
    </List>
  )
}

export default GenreList