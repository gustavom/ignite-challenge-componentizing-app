import '../styles/sidebar.scss';

import {Button} from './Button'

interface SideBarProps {
  handleClick(id:Number):any;
  selectedGenreId:number;
  genres:{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[]
}

export function SideBar(props: SideBarProps) {
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClick(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}