class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.x = 0
    this.y = 0

    this.vx = -2

    this.img = new Image()
    this.img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f832073-2c53-4047-8c7d-9a07307637ed/ddrq3ki-30830e0b-9825-46d3-937f-7409737e4c0a.png/v1/fit/w_426,h_240,q_70,strp/green_hills_fondo__sonic_la_pelicula__by_facundogomez_ddrq3ki-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjQwIiwicGF0aCI6IlwvZlwvOWY4MzIwNzMtMmM1My00MDQ3LThjN2QtOWEwNzMwNzYzN2VkXC9kZHJxM2tpLTMwODMwZTBiLTk4MjUtNDZkMy05MzdmLTc0MDk3MzdlNGMwYS5wbmciLCJ3aWR0aCI6Ijw9NDI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.RkqjgH1CzFb6N1evNwn7FAiu73vCj4IemxnToulD8Yg"
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )

    this.ctx.drawImage(
      this.img,
      this.x + this.w,
      this.y,
      this.w,
      this.h
    )
  }

  move() {
    this.x += this.vx

    if (this.x + this.w <= 0) {
      this.x = 0
    }
  }
}