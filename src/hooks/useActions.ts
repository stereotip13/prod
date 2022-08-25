import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AllActionCreators } from '../store/reducers/action-creators';

export const useActions = () => {
  const dispatch = useDispatch(); // мы можем типизировать useDispatch добавлением <AppDispatch>
  return bindActionCreators(AllActionCreators, dispatch); //мы можем добавлять по немногу actions, а можем поместить их всех сразу ALLActionCreators
};
