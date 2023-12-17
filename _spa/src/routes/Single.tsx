import {
  defer, LoaderFunctionArgs, redirect, useLoaderData, useLocation, useNavigate,
} from 'react-router-dom';
import Requests from '../services/Requests';
import useTitle from '../hooks/useTitle';
import Content from '../components/atoms/Content';
import { ENDPOINT } from '../services/enums';
import GracefulLoad from '../components/hocs/GracefulLoadCards';
import { removeNumberAfterLastSlash } from '../services/utils';
import zuStore from '../store';
import Close from '../assets/icon/close.svg';
import './Single.pcss';
import { ILoaderResponse } from './Home';

export async function SingleEventLoader({ params: { id } }: LoaderFunctionArgs) {
  if (!id) {
    return redirect('/');
  }

  const result = await Requests.getSingleEvent(ENDPOINT.SINGLE, id);

  return defer({
    result,
  });
}

function SingleEvent() {
  const singleLoader = useLoaderData() as ILoaderResponse;
  const location = useLocation();
  const navigate = useNavigate();
  const { goBack } = zuStore();

  const { data: { slug, title } } = singleLoader.result;

  const updatedURL = `${removeNumberAfterLastSlash(location.pathname)}${slug}`;
  window.history.replaceState(null, '', updatedURL);

  useTitle(`${title} - Sextou!`);

  const backToMainPath = () => navigate(`../${goBack}`);

  function handleClose() {
    backToMainPath();
  }

  function handleBackdrop(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const isBackdrop: boolean = evt.target === evt.currentTarget;

    if (isBackdrop) {
      return backToMainPath();
    }

    return null;
  }

  return (
    <div className="backdrop" onClick={handleBackdrop}>
      <div className="single--wrapper">
        <GracefulLoad loaderData={singleLoader.result}>
          {({ loaderData }) => (
            <div className="single--event">
              <div className="nav-wrapper" onClick={handleClose}>
                <img src={Close} alt="Fechar Modal" />
              </div>
              <Content {...loaderData} mode="Single" />
            </div>
          )}
        </GracefulLoad>
      </div>
    </div>
  );
}

export default SingleEvent;
