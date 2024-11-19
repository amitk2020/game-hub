import { Card, CardBody, Image, Heading, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getImageCroppedUrl from "../services/images-crop";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={getImageCroppedUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="20px">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
