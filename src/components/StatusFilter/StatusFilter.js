import { statusFilters } from "./constants";
import { Button } from "components/Button/Button";
import { Container } from "./StatusFilter.styled";

const { all, follow, followings } = statusFilters;

export const StatusFilter = ({filter, setFilter}) => {  
  const handleFilterChange = (filter) => {
    setFilter(filter); 
  };
  
  return (
    <Container>
      <Button
        selected={filter === 'all'}
        onClick={() => handleFilterChange(all)}
      >
        All
      </Button>
      <Button
        selected={filter === 'follow'}
        onClick={() => handleFilterChange(follow)}
      >
        Follow
      </Button>
      <Button
        selected={filter === 'followings'}
        onClick={() => handleFilterChange(followings)}
      >
        Followings 
      </Button>
    </Container>
  );
};

