import { manageEmailActions } from "../store/manage-email-reducer";
import axios from "axios";

export const ActionCreater = (userEmail) => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        let res = await axios.get(
          `https://mailbox-client-6cc81-default-rtdb.firebaseio.com/receive${userEmail}.json`
        );
        // console.log(res);
        dispatch(manageEmailActions.setReceiveMail(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  };
};

export const ActionForSentMail = (userEmail) => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        let res = await axios.get(
          `https://mailbox-client-6cc81-default-rtdb.firebaseio.com/sent${userEmail}.json`
        );
        dispatch(manageEmailActions.setSentServerMail(res.data));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  };
};