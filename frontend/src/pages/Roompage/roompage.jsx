import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useParams , useNavigate } from 'react-router-dom'
import { useWebRTC } from '../../Hooks/useWebRTC'
import { getRoom } from '../../Http/endpoints';
import './roompage.styles.css'
const RoomPage= () => {
    const user = useSelector((state) => state.auth.user);
    const { id: roomId } = useParams();
    const [room, setRoom] = useState(null);

    const { clients, provideRef, handleMute } = useWebRTC(roomId, user);

    const navigate = useNavigate()

    const [isMuted, setMuted] = useState(true);

    useEffect(() => {
        const fetchRoom = async () => {
            const { data } = await getRoom(roomId);
            console.log(data)
            setRoom((prev) => data);
        };

        fetchRoom();
    }, [roomId]);

    useEffect(() => {
        handleMute(isMuted, user.id);
    }, [isMuted]);

    const handManualLeave = () => {
        navigate('/rooms');
    };

    const handleMuteClick = (clientId) => {
        if (clientId !== user.id) {
            return;
        }
        setMuted((prev) => !prev);
    };

    return (
        <div>
            <div className="container">
                <button onClick={handManualLeave} className="goBack">
                    <img src="/src/images/arrow-left.png" alt="arrow-left" />
                    <span>All voice rooms</span>
                </button>
            </div>
            <div className="clientsWrap">
                <div className="header">
                    {room && <h2 className="styles.topic">{room?.topic}</h2>}
                    <div className="actions">
                        <button className="actionBtn">
                            <img src="/src/images/palm.png" alt="palm-icon" />
                        </button>
                        <button
                            onClick={handManualLeave}
                            className="actionBtn"
                        >
                            <img src="/src/images/win.png" alt="win-icon" />
                            <span>Leave quietly</span>
                        </button>
                    </div>
                </div>
                <div className="clientsList">
                    {clients.map((client) => {
                        return (
                            <div className="client" key={client.id}>
                                <div className="userHead">
                                    <img
                                        className="userAvatar"
                                        src={client.avatar}
                                        alt=""
                                    />
                                    <audio
                                        autoPlay
                                        ref={(instance) => {
                                            provideRef(instance, client.id);
                                        }}
                                    />
                                    <button
                                        onClick={() =>
                                            handleMuteClick(client.id)
                                        }
                                        className="micBtn"
                                    >
                                        {client.muted ? (
                                            <img
                                                className="mic"
                                                src="/src/images/mic-mute.png"
                                                alt="mic"
                                            />
                                        ) : (
                                            <img
                                                className="micImg"
                                                src="/src/images/mic.png"
                                                alt="mic"
                                            />
                                        )}
                                    </button>
                                </div>
                                <h4>{client.name}</h4>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RoomPage;