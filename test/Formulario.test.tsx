/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Formulario from '@/components/Contact/Formulario';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Formulario', () => {
  it('preenche e envia o formulário com sucesso', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      })
    ) as jest.Mock;

    render(<Formulario />);

    fireEvent.change(screen.getByPlaceholderText('Seu Nome'), {
      target: { value: 'João' },
    });
    fireEvent.change(screen.getByPlaceholderText('Seu email'), {
      target: { value: 'joao@email.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Seu WhatsApp'), {
      target: { value: '21-91234-5678' },
    });
    fireEvent.change(screen.getByPlaceholderText('Sua mensagem'), {
      target: { value: 'Olá! Tudo bem?' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Emprego' }));
    fireEvent.click(screen.getByRole('button', { name: 'Enviar' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Enviado' })).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/send-email',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.any(String),
      })
    );

    const fetchCall = (global.fetch as jest.Mock).mock.calls[0][1];
    const bodyParsed = JSON.parse(fetchCall.body);

    expect(bodyParsed).toEqual({
      name: 'João',
      email: 'joao@email.com',
      whatsapp: '21-91234-5678',
      message: 'Olá! Tudo bem?',
      subject: 'Emprego',
    });
  });
});
