import { FC } from 'react'
import './NotFoundPage.scss'

export const NotFoundPage: FC = () => {
  return (
    <section className="page_404">
      <div className="row">
        <div className="col-sm-12 ">
          <div className="col-sm-10 col-sm-offset-1">
            <h1 className="text-center">Not Found Page</h1>
            <div className="four_zero_four_bg"></div>

            <div className="contant_box_404">
              <h3 className="h2">Look like you're lost</h3>
              <a href="" className="link_404">Go to TODOLIST</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
