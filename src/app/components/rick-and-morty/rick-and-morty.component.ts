import { Component, OnInit } from '@angular/core';
import { RickandMortyApiService } from 'src/app/services/rickand-morty-api.service';
import { EpisodeSchema } from 'src/app/models/interfaces/episode-schema';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent implements OnInit {

  public episodesList: EpisodeSchema[] = [];
  


  constructor(
    private _rickAndMortyApi: RickandMortyApiService,
    ) { }

  ngOnInit(): void {

    /**
     * cosumo de servicio
     */
    this._rickAndMortyApi.getEpisodeSchema().
      subscribe(
        (resul: any) => {

          console.log(resul)
          const { info, results } = resul
          this.episodesList = [...this.episodesList, ...results]

        }
      );

   

     

  }

}
