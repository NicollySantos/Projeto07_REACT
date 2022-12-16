import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai'
import { RiChat3Line } from 'react-icons/ri'
import { TbSend, TbMoodSmile } from 'react-icons/tb'
import { RiBookmarkLine } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib';


export function Post() {
    return (

        <div>
            <header className='header-post'>
                <div className="infos-post">
                    <img className='img-header-post' src="https://i.pinimg.com/originals/37/76/c0/3776c0d47710ef319650667e3b8d6e45.jpg" />
                    <span>mh_hernandes</span>
                </div>
                <FiMoreHorizontal />
            </header>
            <div className="img-post">
                <img src='https://i.pinimg.com/originals/37/76/c0/3776c0d47710ef319650667e3b8d6e45.jpg'></img>
            </div>
            <div className="footer-post">
                <IconContext.Provider value={{ size: "30px" }}>


                    <section className="engagement-post">
                        <div className='icons-1'>
                            <div className='icon'><AiOutlineHeart /></div>
                            <div className='icon2'><RiChat3Line /></div>
                            <div className='icon'><TbSend /></div>
                        </div>
                        <div className='icon'><RiBookmarkLine /></div>
                    </section>
                </IconContext.Provider>
                <section className='like'>
                    <span>100 curtidas</span>
                </section>
                <div className='legend'>
                    <p>
                        <strong>mh_hernandes</strong> "Que um dia melhor nasça..."
                    </p>
                </div>
                <div className='time-post'>
                    <time>HÁ 4 HORAS</time>
                </div>
                <div className='comment'>
                    <div className='fake-comment'>
                        <IconContext.Provider value={{size:"25px"}}>
                            <div className='icon'>

                            </div>
                            <TbMoodSmile />
                        </IconContext.Provider>
                        <input placeholder='Adicione um comentário...'/>
                        
                    </div>
                    <button>Publicar</button>
                </div>

            </div>
            
        </div>

        

        
        
        

    )
}