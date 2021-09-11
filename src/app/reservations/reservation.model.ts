export class Reservation{
  constructor(
    public id: string,
    public placeId: string,
    public userId: string,
    public placeTitre: string,
    public nombreVisiteur: number
  ){}
}
