import { Button } from '../Button/Button';

export const LoadMore = ({ onClick }) => {
  return (
    <Button type="button" btnStyle="load-more" onClick={onClick}>
      Load more
    </Button>
  );
};
