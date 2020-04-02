import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MainService } from '../shared/services/main.service';
import { Observable } from 'rxjs';
import { SimulationDto } from './simulation-dto';

@Injectable()
export class SimulationService extends MainService {

  constructor(
    private http: HttpClient
  ) {
    super('simulation');
  }

  getDamage(simulationDto: SimulationDto): Observable<number> {
    const params = new HttpParams()
      .set('attackingPokemonId', simulationDto.attacking_pokemon_id.toString())
      .set('defendingPokemonId', simulationDto.defending_pokemon_id.toString())
      .set('moveId', simulationDto.moveid.toString())
      .set('modifier', simulationDto.modifier.toString());
    return this.http.get<number>(`${this.url}/getDamage`, { headers: this.headers, params: params});
  }

}
