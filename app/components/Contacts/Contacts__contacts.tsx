import React, { FC } from 'react'
import { contacts } from '../../api/data'
import { IoLocationOutline } from 'react-icons/io5'
import { FaHeadset } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'
import parse from 'html-react-parser'
import styles from './sass/Contacts__contacts.module.sass';
import { removeSpaces } from '@/app/api/functions'

const Contacts__contacts:FC = () => {
  return (
    <div className='flex flex-col gap-8'>
        <div className={styles.col}>
            <div className={styles.icon}>
                <IoLocationOutline />
            </div>
            <div>
                <h2 className={styles.h2}>Kde nás nájdete</h2>
                <div className={styles.text}>{contacts.address && parse(contacts.address)}</div>
            </div>
        </div>
        <div className={styles.col}>
            <div className={styles.icon}>
                <FaHeadset />
            </div>
            <div>
                <h2 className={styles.h2}>Kontaktujte nás</h2>
                <div className={styles.text}>
                    {contacts.phone && <p><a href={`tel:${removeSpaces(contacts.phone)}`}>{contacts.phone}</a></p>}
                    {contacts.mail && <p><a href={`mailto:${removeSpaces(contacts.mail)}`}>{contacts.mail}</a></p>}
                </div>
            </div>
        </div>
        <div className={styles.col}>
            <div className={styles.icon}>
                <HiOutlineDocumentText />
            </div>
            <div>
                <h2 className={styles.h2}>Fakturaťné údaje</h2>
                <div className={styles.text}>{contacts.contactData && parse(contacts.contactData)}</div>
            </div>
        </div>
    </div>
  )
}

export default Contacts__contacts