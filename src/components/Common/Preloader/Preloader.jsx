import preloader from '../../../assets/images/preloader.svg'
import style from './Preloader.module.css'

let Preloader = () => {
    return (
        <div className={style.content}>
            <img src={preloader} alt='pre' />
            </div>
    )
}

export default Preloader;