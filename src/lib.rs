use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkgMQhg9Fh4sH");

#[program]
pub mod dulceria {

    use super::*;

    pub fn crear_dulce(
        ctx: Context<CrearDulce>,
        nombre: String,
        precio: u64,
        cantidad: u64,
    ) -> Result<()> {

        let dulce = &mut ctx.accounts.dulce;

        dulce.nombre = nombre;
        dulce.precio = precio;
        dulce.cantidad = cantidad;
        dulce.autor = *ctx.accounts.usuario.key;

        Ok(())
    }

    pub fn actualizar_dulce(
        ctx: Context<ActualizarDulce>,
        nombre: String,
        precio: u64,
        cantidad: u64,
    ) -> Result<()> {

        let dulce = &mut ctx.accounts.dulce;

        dulce.nombre = nombre;
        dulce.precio = precio;
        dulce.cantidad = cantidad;

        Ok(())
    }

    pub fn eliminar_dulce(_ctx: Context<EliminarDulce>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CrearDulce<'info> {

    #[account(init, payer = usuario, space = 200)]
    pub dulce: Account<'info, Dulce>,

    #[account(mut)]
    pub usuario: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ActualizarDulce<'info> {

    #[account(mut)]
    pub dulce: Account<'info, Dulce>,

    pub usuario: Signer<'info>,
}

#[derive(Accounts)]
pub struct EliminarDulce<'info> {

    #[account(mut, close = usuario)]
    pub dulce: Account<'info, Dulce>,

    #[account(mut)]
    pub usuario: Signer<'info>,
}

#[account]
pub struct Dulce {

    pub nombre: String,
    pub precio: u64,
    pub cantidad: u64,
    pub autor: Pubkey,
}
