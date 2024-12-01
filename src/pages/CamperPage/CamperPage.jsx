import { Suspense, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCamperById } from '../../redux/vehicles/operation';
import Container from '../../components/assets/Container/Container';
import CamperDetails from '../../components/CamperDetails/CamperDetails';
import Section from '../../components/assets/Section/Section';
import CamperDetailsNavigation from '../../components/CamperDetailsNavigation/CamperDetailsNavigation';
import BookingField from '../../components/BookingFIeld/BookingField';
import SimpleLoader from '../../components/assets/SimpleLoader/SimpleLoader';
import styles from './CamperPage.module.css';
import { resetVehicals } from '../../redux/vehicles/slice';
import { resetFilter } from '../../redux/filters/slice';
import { selectIsLoading } from '../../redux/vehicles/selector';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(resetVehicals());
    dispatch(resetFilter());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);

  return isLoading ? (
    <SimpleLoader />
  ) : (
    <main className={styles}>
      <Section css="details">
        <Container>
          <CamperDetails />
        </Container>
      </Section>
      <Section css="detailsInfo">
        <Container>
          <CamperDetailsNavigation />
          <div className={styles['details-form']}>
            <Suspense fallback={<SimpleLoader />}>
              <Outlet />
            </Suspense>
            <BookingField />
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default CamperPage;
