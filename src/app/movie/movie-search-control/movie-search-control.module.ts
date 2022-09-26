import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirtyCheckComponent } from '../../shared/dirty-check/dirty-check.component';
import { MovieModule } from '../movie.module';
import { MovieSearchControlComponent } from './movie-search-control.component';

@NgModule({
  declarations: [MovieSearchControlComponent],
    imports: [CommonModule, MovieModule, DirtyCheckComponent],
  exports: [MovieSearchControlComponent],
})
export class MovieSearchControlModule {}
