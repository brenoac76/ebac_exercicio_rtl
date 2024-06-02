import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Adicionar dois comentários', () => {
        render(<PostComment/>);

        const addComment = (text: string) => {
            fireEvent.change(screen.getByTestId('comment-textarea'), {
                target: {
                    value: text,
                }
            });
            fireEvent.click(screen.getByTestId('comment-button'));
        };

        addComment('Comentário 1');
        addComment('Comentário 2');
        

        expect(screen.getAllByTestId('comment-text')).toHaveLength(2);
    });
});
