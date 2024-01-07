// import React from 'react'
import s from './Contacts.module.scss'
import contacts from '../../data/contacts';
import { useTranslation } from 'react-i18next'
import { Header } from '../../components'
import headerImg from '../../assets/header.jpg'

const Contacts = () => {
   const {t} = useTranslation()
   const { i18n } = useTranslation()
   const getLang = () => i18n.language === 'en' ? 'en' : 'ua'

   return (
      <div className={s.contacts}>
         <Header img={headerImg}>
            <h1>{t("Contacts")}</h1>
         </Header>
         <div className='container'>
            <div className={s.list}>
               {contacts.map((contact, index) => 
                  <div key={index}>
                     <div className={s.item}>
                        <h3>
                           <span className={s.name}>{contact[getLang()].name}</span> - <span>{contact[getLang()].job}</span>
                        </h3>
                        <p className={s.univ}>{contact[getLang()].university}</p>
                        {contact.email.map(email => 
                           <p><a className={s.email} href={'mailto:' + email}>{email}</a></p>   
                        )}
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};
export default Contacts