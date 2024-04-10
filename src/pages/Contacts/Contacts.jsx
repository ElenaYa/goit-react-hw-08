import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import Loader from '../../components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import toast, { Toaster } from 'react-hot-toast';
import  ErrorMessage  from '../../components/ErrorMessage/ErrorMessage';

export default function Contacts () {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
        .unwrap()
        .catch(() => toast.error("Failed! Please reload page!"));
    }, [dispatch]);

    return (
        <div>
            <ContactForm />
            <SearchBox />
                {isLoading && <Loader />}
                {error && <ErrorMessage>Failed! Please reload page!</ErrorMessage> }
            <ContactList />
            <Toaster />
        </div >
    );
}