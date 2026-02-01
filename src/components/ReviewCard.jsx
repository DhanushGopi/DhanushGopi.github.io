import reviewdata from '../config/ReviewData';

export default function ReviewCard(props){
    return(
        <div className="reviewcard">
            <p className="review-title review review1">{props.review}</p>
            <div className='reviewer-content'>
                <p className="review-subtext reviewer reviewer1">{props.reviewer}</p>
                <p className="review-subtext company company1">{props.company}</p>
            </div>
        </div>
    )
}