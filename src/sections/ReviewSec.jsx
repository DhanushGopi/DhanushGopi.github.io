import review from '../assets/review.svg'
import BlackChip from '../components/BlackChip'
import ReviewCard from '../components/ReviewCard'
import reviewData from '../config/ReviewData'

export default function ReviewSec(){
    return(
        <div className="review-box">
            <BlackChip blackicon={review} btntext="CLIENTS REVIEW"/>
            <p className="titletwo">Trusted by Real Poeple!</p>
            <div className='review-content'>
                <div className='review-row review-left'>
                    <ReviewCard 
                        review={reviewData[0].content}
                        reviewer={`${reviewData[0].reviewer} , ${reviewData[0].role}`}
                        company={reviewData[0].company}
                    />
                    <ReviewCard 
                        review={reviewData[3].content}
                        reviewer={`${reviewData[3].reviewer} , ${reviewData[3].role}`}
                        company={reviewData[3].company}
                    />
                    <ReviewCard 
                        review={reviewData[6].content}
                        reviewer={`${reviewData[6].reviewer} , ${reviewData[6].role}`}
                        company={reviewData[6].company}
                    />
                </div>
                <div className='review-row review-mid'>
                    <ReviewCard 
                        review={reviewData[1].content}
                        reviewer={`${reviewData[1].reviewer} , ${reviewData[1].role}`}
                        company={reviewData[1].company}
                    />
                    <ReviewCard 
                        review={reviewData[4].content}
                        reviewer={`${reviewData[4].reviewer} , ${reviewData[4].role}`}
                        company={reviewData[4].company}
                    />
                </div>
                <div className='review-row review-right'>
                    <ReviewCard 
                        review={reviewData[2].content}
                        reviewer={`${reviewData[2].reviewer} , ${reviewData[2].role}`}
                        company={reviewData[2].company}
                    />
                    <ReviewCard 
                        review={reviewData[5].content}
                        reviewer={`${reviewData[5].reviewer} , ${reviewData[5].role}`}
                        company={reviewData[5].company}
                    />
                    <ReviewCard 
                        review={reviewData[7].content}
                        reviewer={`${reviewData[7].reviewer} , ${reviewData[7].role}`}
                        company={reviewData[7].company}
                    />
                </div>
            </div>
        </div>
    )
}